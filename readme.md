### Youtube Test - ByCoders

- Sistema desenvolvido com NEXT.JS, utilizando axios para comunicação com a API do youtube e styled-components para estilização do projeto
- Sistema básico de SEARCH na API do youtube com historico persistido no localstorage

### Ferramentas utilizadas
* React Hooks
* Zustand (Utilizado como store principal da aplicação) - Optei por utilizar o zustand por ser mais simples do que um Redux e Redux-saga
* Styled-components
* Styled-system
* Axios
* Antd (Framework de componentes)

#### Melhorias futuras

Acredito que para uma melhor utilização do sistema, seria interessante adicionar o Header no escopo global da aplicação para fazer com que toda a aplicação consiga se comunicar com o search e o historico.

Um conhecimento melhor sobre a API do youtube com certeza seria primordial para aprender mais como funciona o sistema de authenticação do google e o sistema de recomendação dos videos.

Implementar um loading infinito para facilitar com que o usuário scrolle para baixo e não veja a requisição sendo feita.

Um melhor aproveitamento dos recursos do styled-system para já criar um sistema que esteja apto para seguir as normas de responsividade do sistema

Implementação de uma API que funcione como MIDDLEWARE para essa aplicação utilizando Graphql na sua resposta, para uma melhor performance.

Após implementar essa API que se comunique com o sistema NEXT.JS, criar um sistema unificado utilizando um Dockerfile para deixar tudo pronto dentro de um container para facilitar o deploy em uma AWS Cloud.

### Duvidas

Quaisquer duvidas, estou a disposição no meu email: yurimusti@gmail.com

