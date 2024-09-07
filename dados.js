//dados dos filmes da Marvel

let dadosFilmes = [{
    titulo: "Homem de Ferro 1",
    descricao: "Homem de Ferro nos apresenta Tony Stark, um bilionário, playboy e gênio da engenharia, dono da Stark Industries, uma das maiores empresas de armas do mundo. Durante uma demonstração de um novo míssil no Afeganistão, Tony é sequestrado e forçado a construir uma arma devastadora. No entanto, usando sua inteligência e recursos, ele constrói uma armadura de alta tecnologia para escapar do cativeiro. Ao retornar para casa, Tony decide abandonar a produção de armas e utiliza sua nova criação para combater o crime, adotando a identidade do Homem de Ferro. A partir daí, ele enfrenta diversos inimigos, incluindo o Mandarim e seu antigo parceiro de negócios, Obadiah Stane, que também almeja a armadura. O filme explora a transformação de Tony Stark, de um industrial egoísta para um herói que se preocupa com o bem-estar da humanidade.",
    link: "https://pt.wikipedia.org/wiki/Homem_de_Ferro_(filme)",
    imagem: "imagem/homemDeFerro1.jpg",
    fase: "Fase 1"
},  {
    titulo: "O Incrível Hulk",
    descricao: "Bruce Banner é um cientista que, após ser exposto a uma alta dose de radiação gama, se transforma no Hulk, uma criatura verde e superforte, sempre que fica com raiva. Enquanto tenta encontrar uma cura para sua condição, ele é perseguido pelo exército dos EUA, liderado pelo General Ross, que quer usar seu poder como uma arma. Banner também enfrenta o Abominável, um soldado que se submeteu a um experimento similar e se tornou uma ameaça ainda maior.",
    link: "https://pt.wikipedia.org/wiki/O_Incr%C3%ADvel_Hulk_(filme)",
    imagem: "imagem/incrivelHulk.jpg",
    fase: "Fase 1"
},  {
    titulo: "Homem de Ferro 2",
    descricao: "Após revelar sua identidade como Homem de Ferro, Tony Stark enfrenta pressão do governo, da imprensa e do público para compartilhar sua tecnologia com as forças armadas. Relutante em divulgar os segredos por trás de sua armadura, Stark, junto com Pepper Potts e James 'Rhodey' Rhodes, deve forjar novas alianças e enfrentar novos inimigos, incluindo o vingativo Ivan Vanko, também conhecido como Whiplash.",
    link: "https://pt.wikipedia.org/wiki/Thor_(filme)",
    imagem: "imagem/homemDeFerro2.jpg",
    fase: "Fase 1"
},  {
    titulo: "Thor",
    descricao: "Thor, o poderoso deus do trovão, é expulso de Asgard por seu pai Odin e enviado à Terra como punição por sua arrogância. Privado de seus poderes, ele deve provar seu valor para recuperar seu martelo mágico, Mjolnir, e impedir que seu irmão Loki tome o trono de Asgard. Durante sua estadia na Terra, Thor aprende lições valiosas sobre humildade e heroísmo.",
    link: "https://pt.wikipedia.org/wiki/Homem_de_Ferro_2",
    imagem: "imagem/Thor.jpg",
    fase: "Fase 1"
},  {
    titulo: "Capitão América: O Primeiro Vingador",
    descricao: "Capitão América: O Primeiro Vingador nos leva para a Segunda Guerra Mundial, onde conhecemos Steve Rogers, um jovem franzino e patriota que sonha em servir seu país. Após ser transformado em um super-soldado por um experimento secreto, Steve se torna o Capitão América, um símbolo de esperança para os Estados Unidos. No entanto, durante a guerra, é dado como morto e congelado. Décadas depois, é encontrado e descongelado, despertando em um mundo completamente diferente. Adaptado à vida moderna, ele se junta aos Vingadores e continua a lutar por justiça, defendendo os valores que sempre acreditou. O filme é uma jornada épica que explora temas como patriotismo, superação e a importância de defender o que é certo.",
    link: "https://pt.wikipedia.org/wiki/Capitão_América:_O_Primeiro_Vingador",
    imagem: "imagem/capitaoAmerica1.jpg",
    fase: "Fase 1"
},  {
    titulo: "Os Vingadores",
    descricao: "Quando Loki, o irmão de Thor, ameaça a Terra com um exército alienígena, Nick Fury, diretor da S.H.I.E.L.D., reúne um grupo de super-heróis para defender o planeta. O time inclui Homem de Ferro, Capitão América, Thor, Hulk, Viúva Negra e Gavião Arqueiro. Juntos, eles devem superar suas diferenças e trabalhar em equipe para salvar o mundo.",
    link: "https://pt.wikipedia.org/wiki/The_Avengers_(2012)",
    imagem: "imagem/Vingadores1.jpg",
    fase: "Fase 1"
},  {
    titulo: "Homem de Ferro 3",
    descricao: "Após os eventos de Os Vingadores, Tony Stark enfrenta um novo inimigo, o Mandarim, que destrói sua vida pessoal e profissional. Sem seus recursos habituais, Stark deve confiar em sua engenhosidade e instintos para proteger aqueles que ama e derrotar seu adversário. O filme explora as consequências psicológicas das batalhas anteriores e a luta de Stark para encontrar sua verdadeira identidade.",
    link: "https://pt.wikipedia.org/wiki/Homem_de_Ferro_3",
    imagem: "imagem/homemDeFerro3.jpg",
    fase: "Fase 2"
},
    {
    titulo: "Thor: O Mundo Sombrio",
    descricao: "Thor deve enfrentar um inimigo antigo, os Elfos Negros, liderados por Malekith, que busca uma arma poderosa chamada Éter para mergulhar o universo na escuridão. Com a ajuda de seu irmão Loki, Thor deve salvar Asgard e a Terra de uma ameaça iminente, enquanto lida com a perda e o sacrifício.",
    link: "https://pt.wikipedia.org/wiki/Thor:_O_Mundo_Sombrio",
    imagem: "imagem/Thor2.jpg",
    fase: "Fase 2"
},  {
    titulo: "Capitão América: O Soldado Invernal",
    descricao: "Steve Rogers, agora trabalhando para a S.H.I.E.L.D., enfrenta uma nova ameaça: o Soldado Invernal, um assassino altamente treinado com uma conexão misteriosa com seu passado. Com a ajuda da Viúva Negra e do Falcão, Rogers deve desvendar uma conspiração dentro da S.H.I.E.L.D. e enfrentar seu antigo amigo, Bucky Barnes.",
    link: "https://pt.wikipedia.org/wiki/Capit%C3%A3o_Am%C3%A9rica:_O_Soldado_Invernal",
    imagem: "imagem/capitaoAmerica2.jpg",
    fase: "Fase 2"
},  {
    titulo: "Guardiões da Galáxia",
    descricao: "Peter Quill, um aventureiro espacial, se junta a um grupo de desajustados, incluindo Gamora, Drax, Rocket e Groot, para impedir que o vilão Ronan obtenha uma poderosa esfera que pode destruir o universo. Juntos, eles formam os Guardiões da Galáxia e devem aprender a trabalhar em equipe para salvar a galáxia.",
    link: "https://pt.wikipedia.org/wiki/Guardi%C3%B5es_da_Gal%C3%A1xia_(filme)",
    imagem: "imagem/guadioesDaGalaxia1.jpg",
    fase: "Fase 2"
},{
    titulo: "Vingadores: Era de Ultron",
    descricao: "Os Vingadores enfrentam uma nova ameaça quando Tony Stark e Bruce Banner criam Ultron, uma inteligência artificial destinada a proteger a Terra. No entanto, Ultron se volta contra seus criadores e planeja a extinção da humanidade. Os Vingadores devem unir forças para derrotar Ultron e salvar o mundo mais uma vez.",
    link: "https://pt.wikipedia.org/wiki/Vingadores:_Era_de_Ultron",
    imagem: "imagem/Vingadores2.jpg",
    fase: "Fase 2"
},  {
    titulo: "Homem-Formiga",
    descricao: "Scott Lang, um ladrão habilidoso, recebe uma segunda chance quando o cientista Hank Pym o recruta para usar um traje especial que permite encolher em tamanho, mas aumentar em força. Como o Homem-Formiga, Scott deve ajudar Hank a proteger a tecnologia do traje de cair em mãos erradas e salvar o mundo de uma nova ameaça.",
    link: "https://pt.wikipedia.org/wiki/Homem-Formiga_(filme)",
    imagem: "imagem/homemFormiga.jpg",
    fase: "Fase 2"
},  {
    titulo: "Capitão América: Guerra Civil",
    descricao: "Após um incidente internacional envolvendo os Vingadores, o governo propõe um sistema de registro de super-heróis, dividindo a equipe em dois lados: um liderado por Tony Stark, que apoia o registro, e outro liderado por Steve Rogers, que se opõe. A tensão entre os heróis culmina em um confronto épico que testa suas amizades e lealdades.",
    link: "https://pt.wikipedia.org/wiki/Capit%C3%A3o_Am%C3%A9rica:_Guerra_Civil",
    imagem: "imagem/capitaoAmerica3.jpg",
    fase: "Fase 3"
},  {
    titulo: "Doutor Estranho",
    descricao: "Stephen Strange, um neurocirurgião brilhante, sofre um acidente de carro que destrói suas mãos. Em busca de cura, ele viaja ao redor do mundo e encontra a Anciã, que o ensina as artes místicas. Strange deve usar suas novas habilidades para proteger o mundo de ameaças mágicas e interdimensionais.",
    link: "https://pt.wikipedia.org/wiki/Doutor_Estranho_(filme)",
    imagem: "imagem/doutorEstranho.jpg",
    fase: "Fase 3"
},  {
    titulo: "Guardiões da Galáxia Vol. 2",
    descricao: "Os Guardiões da Galáxia continuam suas aventuras enquanto tentam desvendar os mistérios da verdadeira linhagem de Peter Quill. Eles enfrentam novos inimigos e formam alianças inesperadas enquanto lutam para manter sua recém-descoberta família unida.",
    link: "https://pt.wikipedia.org/wiki/Guardi%C3%B5es_da_Gal%C3%A1xia_Vol._2",
    imagem: "imagem/guadioesDaGalaxia2.jpg",
    fase: "Fase 3"
},  {
    titulo: "Homem-Aranha: De Volta ao Lar",
    descricao: "Após sua experiência com os Vingadores, Peter Parker volta para casa, onde vive com sua tia May. Sob o olhar atento de seu novo mentor, Tony Stark, Parker tenta equilibrar sua vida como um estudante do ensino médio e seu alter ego, o Homem-Aranha, enquanto enfrenta o novo vilão Abutre.",
    link: "https://pt.wikipedia.org/wiki/Homem-Aranha:_De_Volta_ao_Lar",
    imagem: "imagem/homemAranha.png",
    fase: "Fase 3"
},  {
    titulo: "Thor: Ragnarok",
    descricao: "Thor é aprisionado no outro lado do universo e deve lutar em uma arena de gladiadores contra seu antigo aliado, Hulk. Ele precisa encontrar uma maneira de voltar a Asgard para impedir o Ragnarok, a destruição de seu mundo natal, pelas mãos da poderosa e implacável Hela.",
    link: "https://pt.wikipedia.org/wiki/Thor:_Ragnarok",
    imagem: "imagem/Thor3.jpg",
    fase: "Fase 3"
},  {
    titulo: "Pantera Negra",
    descricao: "Após a morte de seu pai, T'Challa retorna a Wakanda para assumir seu lugar como rei. No entanto, ele enfrenta desafios de facções dentro de seu próprio país e de um inimigo poderoso, Erik Killmonger, que ameaça expor Wakanda ao mundo e iniciar uma guerra global.",
    link: "https://pt.wikipedia.org/wiki/Pantera_Negra_(filme)",
    imagem: "imagem/panteraNegra.jpg",
    fase: "Fase 3"
},  {
    titulo: "Vingadores: Guerra Infinita",
    descricao: "Os Vingadores e seus aliados devem estar dispostos a sacrificar tudo para derrotar o poderoso Thanos, que está em uma missão para coletar todas as seis Joias do Infinito. Thanos planeja usá-las para infligir sua vontade distorcida sobre toda a realidade, resultando em uma batalha épica pelo destino do universo.",
    link: "https://pt.wikipedia.org/wiki/Vingadores:_Guerra_Infinita",
    imagem: "imagem/vingadores3.jpg",
    fase: "Fase 3"
},  {
    titulo: "Homem-Formiga e a Vespa",
    descricao: "Scott Lang lida com as consequências de suas escolhas como super-herói e pai. Enquanto luta para equilibrar sua vida doméstica com suas responsabilidades como Homem-Formiga, ele é confrontado por Hope van Dyne e Dr. Hank Pym com uma nova missão urgente. Scott deve novamente vestir o traje e aprender a lutar ao lado da Vespa enquanto a equipe trabalha para descobrir segredos de seu passado.",
    link: "https://pt.wikipedia.org/wiki/Homem-Formiga_e_a_Vespa",
    imagem: "imagem/homemFormiga2.jpg",
    fase: "Fase 3"
},  {
    titulo: "Capitã Marvel",
    descricao: "Carol Danvers se torna uma das heroínas mais poderosas do universo quando a Terra é pega no meio de uma guerra galáctica entre duas raças alienígenas. Situado na década de 1990, Capitã Marvel é uma nova aventura de um período nunca antes visto na história do Universo Cinematográfico da Marvel.",
    link: "https://pt.wikipedia.org/wiki/Capit%C3%A3_Marvel_(filme)",
    imagem: "imagem/capitaMarvel.jpg",
    fase: "Fase 3"
},  {
    titulo: "Vingadores: Ultimato",
    descricao: "Após os eventos devastadores de Vingadores: Guerra Infinita, o universo está em ruínas. Com a ajuda de aliados restantes, os Vingadores se reúnem mais uma vez para desfazer as ações de Thanos e restaurar a ordem no universo de uma vez por todas, independentemente das consequências. O filme culmina em uma batalha épica que define o destino de muitos heróis.",
    link: "https://pt.wikipedia.org/wiki/Vingadores:_Ultimato",
    imagem: "imagem/Vingadores4.jpg",
    fase: "Fase 3"
},  {
    titulo: "Homem-Aranha: Longe de Casa",
    descricao: "Após os eventos de Vingadores: Ultimato, Peter Parker vai em uma viagem escolar para a Europa. No entanto, seus planos de deixar suas atividades de super-herói para trás são rapidamente descartados quando ele relutantemente concorda em ajudar Nick Fury a descobrir o mistério de vários ataques de criaturas elementais, criando novos desafios para o jovem herói.",
    link: "https://pt.wikipedia.org/wiki/Homem-Aranha:_Longe_de_Casa",
    imagem: "imagem/homemAranha2.jpg",
    fase: "Fase 3"
},  {
    titulo: "Viúva Negra",
    descricao: "Situado entre os eventos de Capitão América: Guerra Civil e Vingadores: Guerra Infinita, o filme segue Natasha Romanoff enquanto ela confronta as partes mais sombrias de seu passado. Perseguida por uma força que não vai parar até derrubá-la, Natasha deve lidar com sua história como espiã e as relações quebradas deixadas em seu rastro muito antes de se tornar uma Vingadora.",
    link: "https://pt.wikipedia.org/wiki/Vi%C3%BAva_Negra_(filme)",
    imagem: "imagem/viuvaNegra.jpg",
    fase: "Fase 4"
},  {
    titulo: "Shang-Chi e a Lenda dos Dez Anéis",
    descricao: "Shang-Chi é atraído para a misteriosa organização dos Dez Anéis e deve confrontar o passado que ele pensou ter deixado para trás. O filme explora a jornada de Shang-Chi para se tornar o herói que ele está destinado a ser, enfrentando seu pai e líder da organização, Wenwu.",
    link: "https://pt.wikipedia.org/wiki/Shang-Chi_e_a_Lenda_dos_Dez_An%C3%A9is",
    imagem: "imagem/shangChi.jpeg",
    fase: "Fase 4"
},  {
    titulo: "Eternos",
    descricao: "Os Eternos são uma raça de seres imortais que viveram na Terra e moldaram sua história e civilizações. Após os eventos de Vingadores: Ultimato, uma tragédia inesperada os força a sair das sombras para se reunir contra os Deviantes, os inimigos mais antigos da humanidade.",
    link: "https://pt.wikipedia.org/wiki/Eternos_(filme)",
    imagem: "imagem/Eternos.jpg",
    fase: "Fase 4"
},  {
    titulo: "Homem-Aranha: Sem Volta para Casa",
    descricao: "Com a identidade do Homem-Aranha agora revelada, Peter Parker pede ajuda ao Doutor Estranho. Quando um feitiço dá errado, perigosos vilões de outros universos começam a aparecer, forçando Peter a descobrir o que realmente significa ser o Homem-Aranha.",
    link: "https://pt.wikipedia.org/wiki/Homem-Aranha:_Sem_Volta_para_Casa",
    imagem: "imagem/homemAranha3.jpg",
    fase: "Fase 4"
},  {
    titulo: "Doutor Estranho no Multiverso da Loucura",
    descricao: "Doutor Estranho, com a ajuda de aliados místicos antigos e novos, atravessa as realidades alternativas do multiverso para enfrentar um novo e misterioso adversário. O filme explora as consequências das ações de Strange e os perigos do multiverso.",
    link: "https://pt.wikipedia.org/wiki/Doutor_Estranho_no_Multiverso_da_Loucura",
    imagem: "imagem/doutorEstranho2.jpeg",
    fase: "Fase 4"
},  {
    titulo: "Thor: Amor e Trovão",
    descricao: "Thor embarca em uma jornada diferente de tudo que já enfrentou: uma busca pela paz interior. Sua aposentadoria é interrompida por Gorr, o Carniceiro dos Deuses, que busca a extinção dos deuses. Para combater a ameaça, Thor conta com a ajuda da Rainha Valquíria, Korg e sua ex-namorada Jane Foster, que - para surpresa de Thor - inexplicavelmente empunha seu martelo mágico, Mjolnir, como a Poderosa Thor.",
    link: "https://pt.wikipedia.org/wiki/Thor:_Amor_e_Trov%C3%A3o",
    imagem: "imagem/Thor4.jpg",
    fase: "Fase 4"
},  {
    titulo: "Pantera Negra: Wakanda Para Sempre",
    descricao: "Após a morte do Rei T'Challa, as forças de Wakanda devem lutar para proteger sua nação das potências mundiais que tentam intervir. Enquanto os Wakandanos se esforçam para abraçar seu próximo capítulo, os heróis devem se unir com a ajuda da Coração de Ferro e enfrentar novos desafios para proteger seu lar.",
    link: "https://pt.wikipedia.org/wiki/Black_Panther:_Wakanda_Forever",
    imagem: "imagem/panteraNegra2.jpg",
    fase: "Fase 4"
},  {
    titulo: "Homem-Formiga e a Vespa: Quantumania",
    descricao: "Scott Lang e Hope van Dyne, junto com Hank Pym e Janet van Dyne, exploram o Reino Quântico, onde encontram criaturas estranhas e embarcam em uma aventura que os levará além dos limites do que pensavam ser possível. Eles enfrentam Kang, o Conquistador, um novo e poderoso inimigo.",
    link: "https://pt.wikipedia.org/wiki/Homem-Formiga_e_a_Vespa:_Quantumania",
    imagem: "imagem/homemFormiga3.jpg",
    fase: "Fase 4"
},  {
    titulo: "Guardiões da Galáxia Vol. 3",
    descricao: "Os Guardiões da Galáxia enfrentam novos desafios enquanto continuam suas aventuras pelo cosmos. Peter Quill, ainda se recuperando da perda de Gamora, deve reunir sua equipe para defender o universo e proteger um dos seus. Uma missão que, se não for bem-sucedida, pode levar ao fim dos Guardiões como os conhecemos.",
    link: "https://pt.wikipedia.org/wiki/Guardi%C3%B5es_da_Gal%C3%A1xia_Vol._3",
    imagem: "imagem/guadioesDaGalaxia3.jpg",
    fase: "Fase 4"
},  {
    titulo: "The Marvels",
    descricao: "Carol Danvers, também conhecida como Capitã Marvel, se junta a Kamala Khan, a Ms. Marvel, e Monica Rambeau para enfrentar uma nova ameaça cósmica. As três heroínas devem aprender a trabalhar juntas e lidar com suas habilidades interligadas para salvar o universo.",
    link: "https://pt.wikipedia.org/wiki/The_Marvels",
    imagem: "imagem/asMarvels.jpg",
    fase: "Fase 5"
},  {
    titulo: "Capitão América: Nova Ordem Mundial",
    descricao: "Sam Wilson assume o manto de Capitão América e enfrenta novos desafios enquanto tenta manter a paz e a justiça. O filme explora a transição de Sam para o papel de Capitão América e as dificuldades que ele enfrenta ao lidar com ameaças globais.",
    link: "https://universocinematograficomarvel.fandom.com/pt-br/wiki/Capitão_América",
    imagem: "imagem/capitaoAmerica4.jpg",
    fase: "Fase 5"
}           
];

let dadosHerois = [{
        apelido: "Homem de Ferro",
        nome: "Nome: Tony Stark",
        descricao: "Descrição: Um gênio bilionário e filantropo que usa uma armadura de alta tecnologia para combater o crime e proteger o mundo."
    },  {
        apelido: "Capitão América",
        nome: "Nome: Steve Rogers",
        descricao: "Descrição: Um soldado super-humano com um escudo indestrutível, conhecido por sua liderança e coragem."
    },  {
        apelido: "Thor",
        nome: "Nome: Thor Odinson",
        descricao: "Descrição: O deus do trovão de Asgard, que empunha o poderoso martelo Mjolnir e protege os Nove Reinos."
    },  {
        apelido: "Hulk",
        nome: "Nome: Bruce Banner",
        descricao: "Descrição: Um cientista que se transforma em um gigante verde com força sobre-humana quando fica irritado."
    },  {
        apelido: "Viúva Negra",
        nome: "Nome: Natasha Romanoff",
        descricao: "Descrição: Uma espiã altamente treinada e ex-agente da KGB, conhecida por suas habilidades de combate e espionagem."
    },  {
        apelido: "Homem-Aranha",
        nome: "Nome: Peter Parker",
        descricao: "Descrição: Um jovem com habilidades aracnídeas, incluindo força, agilidade e a capacidade de escalar paredes, que luta contra o crime em Nova York."
    },  {
        apelido: "Pantera Negra",
        nome: "Nome: T'Challa,",
        descricao: "Descrição: O rei de Wakanda, que possui habilidades aprimoradas e um traje de vibranium, protegendo seu reino e o mundo"
    },  {
        apelido: "Doutor Estranho",
        nome: "Nome: Stephen Strange",
        descricao: "Descrição: Um ex-cirurgião que se torna o Mago Supremo, protegendo a Terra de ameaças místicas e interdimensionais."
    },  {
        apelido: "Capitã Marvel",
        nome: "Nome: Carol Danvers",
        descricao: "Descrição: Uma ex-piloto da Força Aérea que ganha poderes cósmicos e se torna uma das heroínas mais poderosas do universo."
    },  {
        apelido: "Senhor das Estrelas",
        nome: "Nome: Peter Quill",
        descricao: "Descrição: Um aventureiro espacial e líder dos Guardiões da Galáxia, conhecido por seu charme e habilidades de combate."
    },  {
        apelido: "Gamora",
        nome: "Nome: Gamora",
        descricao: "Descrição: A filha adotiva de Thanos, uma guerreira habilidosa e membro dos Guardiões da Galáxia."
    },  {
        apelido: "Drax",
        nome: "Nome: Drax, o Destruidor",
        descricao: "Descrição: Um guerreiro com força sobre-humana e habilidades de combate, determinado a vingar sua família."
    },  {
        apelido: "Rocket",
        nome: "Nome: Rocket Raccoon",
        descricao: "Descrição: Um guaxinim geneticamente modificado, especialista em armas e táticas, membro dos Guardiões da Galáxia."
    },  {
        apelido: "Groot",
        nome: "Nome: Groot",
        descricao: "Descrição: Uma criatura semelhante a uma árvore, com habilidades regenerativas e de crescimento, membro dos Guardiões da Galáxia."
    },  {
        apelido: "Feiticeira Escarlate",
        nome: "Nome: Wanda Maximoff",
        descricao: "Descrição: Uma poderosa usuária de magia com a habilidade de manipular a realidade e lançar feitiços."
    },  {
        apelido: "Visão",
        nome: "Nome: Visão",
        descricao: "Descrição: Um androide sintético criado com a ajuda da Joia da Mente, possuindo superforça, intangibilidade e a capacidade de voar."
    },  {
        apelido: "Falcão",
        nome: "Nome: Sam Wilson",
        descricao: "Descrição: Um ex-paraquedista das Forças Especiais que usa um traje com asas mecânicas para voar e combater o crime."
    },  {
        apelido: "Soldado Invernal",
        nome: "Nome: Bucky Barnes",
        descricao: "Descrição: O melhor amigo de Steve Rogers, transformado em um assassino cibernético com um braço de metal."
    },  {
        apelido: "Homem-Formiga",
        nome: "Nome: Scott Lang",
        descricao: "Descrição: Um ladrão reformado que usa um traje especial que lhe permite encolher em tamanho, mas aumentar em força."
    },  {
        apelido: "Vespa",
        nome: "Nome: Hope van Dyne",
        descricao: "Descrição: Filha de Hank Pym, que usa um traje semelhante ao do Homem-Formiga, com a adição de asas e blasters de energia."
    }
]

