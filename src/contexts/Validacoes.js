import { createContext, useState } from "react";
import { validate } from 'gerador-validador-cpf'
import cnpjUtils from 'cnpj-utils'
import erro from './../pages/erro404';

export const ValidacoesContext = createContext({});

export const ValidacoesProvider = ({ children }) => {
    const [erros, setErros] = useState([])


    function validaEndereco(form) {
        let tmpErros = [...isBlank(form)]
        setErros(tmpErros)
        if (tmpErros.length == 0) { }
        setErros(tmpErros)
        if (tmpErros.length == 0) {
            return true
        } else {
            return false
        }
    }

    function validaAttDadosPessoais(antigo, novo) {
        let tmpErros = [...isBlank(novo)]
        setErros(tmpErros)
        let tmpTelPrimario = limpaFormatacao(novo.telPrimario)
        let tmpTelSecundario = limpaFormatacao(novo.telSecundario)
        if (tmpErros.length == 0) {
            if (tmpTelPrimario.length < 10) {
                tmpErros.push("telefone primario deve ter ao menos 10 digitos")
            }

            if (tmpTelSecundario != "" && tmpTelSecundario.length < 10) {
                tmpErros.push("telefone secundario deve ter ao menos 10 digitos")
            }
        }

        setErros(tmpErros)
        if (tmpErros.length == 0) {
            if (antigo.nome != novo.nome || antigo.telefonePrimario != tmpTelPrimario || antigo.telefoneSecundario != tmpTelSecundario) {
                return true
            } else {
                return false
            }
        } else {
            return false
        }
    }

    function validaDadosPessoais(form) {
        let tmpErros = [...isBlank(form)]
        
        setErros(tmpErros)
        let tmpTelPrimario = limpaFormatacao(form.telPrimario)
        let tmpTelSecundario = limpaFormatacao(form.telSecundario)
        let tmpDocumento = limpaFormatacao(form.cpf);
        if (tmpErros.length == 0) {
            if (!validate(tmpDocumento) && !cnpjUtils.isValid(tmpDocumento)) {
                tmpErros.push("Documento invalido")
            }
            tmpErros.push(...validarData(form.dataNasc))
            if (tmpTelPrimario.length < 10) {
                tmpErros.push("telefone primario deve ter ao menos 10 digitos")
            }

            if (tmpTelSecundario != "" && tmpTelSecundario.length < 10) {
                tmpErros.push("telefone secundario deve ter ao menos 10 digitos")
            }
        }

        setErros(tmpErros)
        if (tmpErros.length == 0) {
            return true
        } else {
            return false
        }
    }

    function validarData(d){
        
        let erro = []

        let anoAtual = new Date().getFullYear();
        let ano = Number(d.slice(6,10))
        let mes = Number(d.slice(3,5))
        let dia = Number(d.slice(0,2))
        
        if(dia > 31 || dia < 1 || mes > 12 || mes < 1 || ano > anoAtual || ano < 1900 || d.length < 10){
            erro.push("data invalida")
        }else if((anoAtual - ano) < 18 ){
            erro.push("o usuario deve ser maior de idade")
        }
    
        return erro
    }

    function ValidaAttSenha(form) {
        let tmpErros = [...isBlank(form)]
        if (tmpErros.length == 0) {
            if (form.novaSenha != form.confirmSenha) {
                tmpErros.push("As senhas não coincidem")
            } else {
                tmpErros.push(...isForte(form.novaSenha))
            }
            if(form.novaSenha == form.senhaAtual){
                tmpErros.push("a nova senha não pode ser a mesma que a atual")
            }
        }

        setErros(tmpErros)
        if (tmpErros.length == 0) {
            return true
        } else {
            return false
        }
    }

    function validaUsuario(form) {
        let tmpErros = [...isBlank(form)]
        if (tmpErros.length == 0) {
            if (form.senha != form.confirmSenha) {
                tmpErros.push("As senhas não coincidem")
            } else {
                tmpErros.push(...isForte(form.senha))
            }
            if (!validateEmail(form.email)) {
                tmpErros.push("email invalido")
            }
        }
        setErros(tmpErros)
        if (tmpErros.length == 0) {
            return true
        } else {
            return false
        }
    }

    function isForte(senha) {
        let tmpErros = []
        if (senha.length < 8) {
            tmpErros.push("A sua senha deve conter ao menos 8 caracteres");
        }
        if (senha.search(/[a-z]/i) < 0) {
            tmpErros.push("A sua senha deve ter pelo menos uma letra");
        }
        if (senha.search(/[0-9]/) < 0) {
            tmpErros.push("A sua senha deve ter pelo menos um numero");
        }

        return tmpErros
    }

    function limpaFormatacao(v) {
        v = v.replace(/[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/ ]/gi, '')
        return v;
    }

    function isBlank(form) {
        let erros = []
        for (let i in form) {
            if (form[i] == "") {
                if (i == "confirmSenha") {
                    erros.push(`confirmação de senha não pode estar em branco`)
                } else if (i == "senhaAtual") {
                    erros.push(`senha atual não pode estar em branco`)
                } else if (i == "novaSenha") {
                    erros.push(`nova senha não pode estar em branco`)
                }  else if (i == "telPrimario") {
                    erros.push(`telefone principal não pode estar em branco`)
                } else if (i == "telSecundario") {

                } else if (i == "complemento") {

                } else if (i == "dataNasc") {
                    erros.push(`data de nascimento não pode estar em branco`)
                }else if (i == "nomeFantasia") {
                    erros.push(`nome da assistência não pode estar em branco`)
                } else {
                    erros.push(`${i} não pode estar em branco`)
                }
            }
        }

        return erros;
    }

    function validateEmail(email) {
        const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    }

    return (<ValidacoesContext.Provider value={{ erros, ValidaAttSenha, validaAttDadosPessoais, validaUsuario, validaDadosPessoais, validaEndereco, setErros, isBlank }}>{children}</ValidacoesContext.Provider>)
}

