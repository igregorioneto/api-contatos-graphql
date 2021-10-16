const { ApolloServer } = require("apollo-server");
const graphql = require("./src/graphql");
const UsuarioCadastroService = require("./src/services/usuario-cadastro-service");

const server = new ApolloServer({
  ...graphql,
  context: () => ({
    usuarioCadastroService: UsuarioCadastroService,
  })
});

server.listen().then(({ url }) => console.log(url));