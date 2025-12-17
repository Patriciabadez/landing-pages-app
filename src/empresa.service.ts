import { Injectable } from '@angular/core';
import { Empresa } from './app/empresas/models/models';

@Injectable({ providedIn: 'root' })
export class EmpresaService {

  empresas: Empresa[] = [
    {
      slug: 'condominios',
      nome: 'Condomínios',
      descricao: 'Gestão moderna para condomínios',
      headline: 'Gestão inteligente para condomínios',
      subheadline: 'Mais controle e menos dor de cabeça',
      beneficios: ['Financeiro', 'Relatórios', 'Automação']
    },
    {
      slug: 'industrias',
      nome: 'Indústrias',
      descricao: 'Eficiência industrial',
      headline: 'Mais eficiência na indústria',
      subheadline: 'Controle total de processos',
      beneficios: ['KPIs', 'Automação', 'Custos']
    },
    {
      slug: 'escolas',
      nome: 'Escolas',
      descricao: 'Organização escolar',
      headline: 'Gestão escolar simplificada',
      subheadline: 'Foco no ensino',
      beneficios: ['Administração', 'Financeiro', 'Relatórios']
    },
    {
      slug: 'faculdades',
      nome: 'Faculdades',
      descricao: 'Ensino superior organizado',
      headline: 'Gestão acadêmica eficiente',
      subheadline: 'Decisões estratégicas',
      beneficios: ['Acadêmico', 'Financeiro', 'Gestão']
    },
    {
      slug: 'hospitais',
      nome: 'Hospitais',
      descricao: 'Controle hospitalar',
      headline: 'Gestão hospitalar inteligente',
      subheadline: 'Mais segurança e controle',
      beneficios: ['Processos', 'Indicadores', 'Controle']
    },
    {
      slug: 'clinicas',
      nome: 'Clínicas',
      descricao: 'Gestão de clínicas',
      headline: 'Organização para clínicas',
      subheadline: 'Atendimento eficiente',
      beneficios: ['Agenda', 'Financeiro', 'Relatórios']
    },
    {
      slug: 'academias',
      nome: 'Academias',
      descricao: 'Gestão fitness',
      headline: 'Controle para academias',
      subheadline: 'Mais alunos, menos esforço',
      beneficios: ['Alunos', 'Planos', 'Financeiro']
    },
    {
      slug: 'comercio',
      nome: 'Comércio',
      descricao: 'Controle comercial',
      headline: 'Gestão para comércio',
      subheadline: 'Venda mais com controle',
      beneficios: ['Vendas', 'Financeiro', 'Relatórios']
    },
    {
      slug: 'varejo',
      nome: 'Varejo',
      descricao: 'Gestão de varejo',
      headline: 'Soluções para varejo',
      subheadline: 'Controle e escala',
      beneficios: ['Estoque', 'Vendas', 'Indicadores']
    },
    {
      slug: 'restaurantes',
      nome: 'Restaurantes',
      descricao: 'Gestão gastronômica',
      headline: 'Controle para restaurantes',
      subheadline: 'Menos desperdício',
      beneficios: ['Pedidos', 'Custos', 'Relatórios']
    },
    {
      slug: 'hoteis',
      nome: 'Hotéis',
      descricao: 'Gestão hoteleira',
      headline: 'Gestão para hotéis',
      subheadline: 'Experiência e controle',
      beneficios: ['Reservas', 'Financeiro', 'Indicadores']
    },
    {
      slug: 'logistica',
      nome: 'Logística',
      descricao: 'Controle logístico',
      headline: 'Gestão logística eficiente',
      subheadline: 'Rastreamento e controle',
      beneficios: ['Roteiros', 'Custos', 'Indicadores']
    },
    {
      slug: 'transportes',
      nome: 'Transportes',
      descricao: 'Gestão de frota',
      headline: 'Controle de transportes',
      subheadline: 'Eficiência operacional',
      beneficios: ['Frota', 'Custos', 'Manutenção']
    },
    {
      slug: 'financeiras',
      nome: 'Financeiras',
      descricao: 'Gestão financeira',
      headline: 'Soluções financeiras',
      subheadline: 'Segurança e controle',
      beneficios: ['Indicadores', 'Compliance', 'Relatórios']
    },
    {
      slug: 'contabilidade',
      nome: 'Contabilidade',
      descricao: 'Gestão contábil',
      headline: 'Controle para contadores',
      subheadline: 'Produtividade e segurança',
      beneficios: ['Fiscal', 'Financeiro', 'Relatórios']
    },
    {
      slug: 'imobiliarias',
      nome: 'Imobiliárias',
      descricao: 'Gestão imobiliária',
      headline: 'Controle de imóveis',
      subheadline: 'Gestão simples',
      beneficios: ['Contratos', 'Financeiro', 'Gestão']
    },
    {
      slug: 'tecnologia',
      nome: 'Tecnologia',
      descricao: 'Gestão tech',
      headline: 'Controle para empresas tech',
      subheadline: 'Escala e inovação',
      beneficios: ['Projetos', 'Indicadores', 'Processos']
    },
    {
      slug: 'servicos',
      nome: 'Serviços',
      descricao: 'Gestão de serviços',
      headline: 'Organização de serviços',
      subheadline: 'Mais produtividade',
      beneficios: ['Ordens', 'Financeiro', 'Relatórios']
    }
  ];

  listar() {
    return this.empresas;
  }

  buscar(slug: string) {
    return this.empresas.find(e => e.slug === slug)!;
  }
}
