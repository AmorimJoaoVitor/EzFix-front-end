import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown, faCaretRight, faPlus } from '@fortawesome/free-solid-svg-icons';
import CardFaq from './cardFaq';
import React, { useState } from 'react'


const LabelFaq = () => {
    const [sectionExt, setSectionExt] = useState(false);
    return (

        <>

            <CardFaq pergunta="O que é EzFix ?" resposta=" ExFiz é uma empresa criada com o objetivo de facilitar a integração entre o cliente e o técnico, facilitando todo o processo." />
            <CardFaq pergunta="Como contratar?" resposta="  Para contratar basta acessar o nosso site entrar no área da assistencia e cadastrar com os dados necessários." />
            <CardFaq pergunta="Planos" resposta="   Temos 3 tipos de planos o Basico o Intermediario e o Avançado" />
            <CardFaq pergunta="Tarifas" resposta="  O plano 'Básico' não possui nenhuma tarifa em relação ao uso da plataforma.
                                                  O plano 'Intermediário' tem o custo mensal de 100 reais/mês devidas as suas vantagens em relação ao plano 'Básico'
                                                  O Plano 'Avançado' tem o custo mensal de 175/mês devido a suas excelentes vantagens e benefícios para o usuário"/>
            <CardFaq pergunta="Cobertura" resposta=" ExFiz atende todo o território nascional." />
            <CardFaq pergunta="Vantagens" resposta="Temos 3 planos 
                                            O 'Básico' abrange suporte '24h horas' e permite acesso a nossa 'dashboard'.
                                            O 'Intermediário' abrange o plano 'Básico' mais 'frete grátis' de até 5 km e ficar em 'destaque na plataforma' por até 2 semanas no mês.
                                            O 'Avançado' abrange o plano 'Intermediário' com plus no 'frete grátis' que vai até 10 km; destaque na plataforma todos os dias e métricas personalizadas"/>
            <CardFaq pergunta="Posso levar meu produto pessoalmente ?" resposta="Sim, estando disponível essa opção você pode optar por levar seu aparelho diretamente ao técnico." />
            <CardFaq pergunta="O que fazer se meu aparelho for roubado?" resposta=" O apararelho possui nossa garantia, contra roubos, furtos e danos, a partir do momento que a empresa parceira buscar o aparelho em sua casa até o momento de sua devolução. Não nos responsabilizamos caso o transporte seja feito pelo próprio cliente." />
            <CardFaq pergunta="Qual a forma de pagamento?" resposta="Apenas cartão de crédito até o momento via mercado pago" />


        </>


    )


}



export default LabelFaq