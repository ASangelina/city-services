# City Services API

## Sobre

A API City Services permite que prestadores de serviços, como encanadores, eletricistas, professores particulares, entre outros, registrem seus serviços e informações de contato de forma eficiente.

## Funcionalidades

- Cadastro de profissionais com informações de contato e descrição dos serviços oferecidos.
- Listagem de todos os profissionais cadastrados.
- Busca de profissionais específicos (através do id).

## Pré- Requisitos

- [Node](https://nodejs.org/pt)
- [PostgreSQL](https://www.postgresql.org/)

## Configurando o ambiente

1.  Clone o repositório

    ```bash
    $ git clone https://github.com/ASangelina/city-services.git
    ```

2.  Entre na pasta

    ```bash
    $ cd city-services
    ```

3.  Instale as dependências

    ```bash
    $ npm install
    ```

4.  Configure as variáveis de ambiente

    Crie um arquivo .env na raiz do projeto e configure as variáveis de ambiente necessárias. Um exemplo de arquivo .env

    ```bash
    DB_HOST=nome_do_host
    DB_PORT=numero_da_porta
    DB_NAME=nome_banco_de_dados
    DB_USER=usuario_banco_de_dados
    DB_PASS=senha_banco_de_dados
    ```

## Executando

Para executar o projeto em modo desenvolvimento:

```bash
$ npm run start:dev
```

A aplicação estará disponível em http://localhost:3000.

## Deploy

O deploy foi realizado na Railway e está disponível [neste link](https://city-services-development.up.railway.app/professionals).

Para acessar a documentação no Swagger e explorar as rotas disponíveis na API [clique aqui](https://city-services-development.up.railway.app/api).

## Colaboradoras

<table>
  <tr>
     <td align="center">
      <a href="https://www.linkedin.com/in/angelina-siqueira/">
        <img src="https://avatars.githubusercontent.com/u/106254077?v=4" width="100px;" alt="Foto Angelina"/><br>
        <sub>
          <b>Angelina Siqueira</b>
        </sub>
      </a>
    </td>
    <td align="center">
      <a href="https://www.linkedin.com/in/daniele-mottaro/">
        <img src="https://avatars.githubusercontent.com/u/143735595?v=4" width="100px;" alt="Foto Daniele"/><br>
        <sub>
          <b>Daniele Motta</b>
        </sub>
      </a>
    </td>
  </tr>
</table>
