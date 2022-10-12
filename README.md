## webpack-react-typescript

Template for create react app using webpack and typescript.

###

<img src="https://i.morioh.com/bffbbd66ea.png" alt="webpack-react-typescript" />

###

## Quick Start

**Start the development**

- `git clone https://github.com/m-avagyan/webpack-react-typescript-template.git`
- `yarn install` or `npm install`
- `yarn start` or `npm start`
- open [localhost:3000](http://localhost:3000) in your favorite browser

**Build project**

- `yarn build` or `npm run build`

**Lint project**

- `yarn lint` or `npm run lint`

**Fix autofixable eslint errors**

- `yarn lint:fix` or `npm run lint:fix`

If `husky` pre-commit hook willn't work, please run `npx husky-init` command with cli (in project directory)<br /> and replace new `.husky/pre-commit` file with our. <br />Also I created `release.yml` file in `.github/workflows/`. This is for automation our releases with github bot,<br />so you need to add your script after `yarn build` command.

## Used technologies

- [React 17](https://reactjs.org/blog/2020/10/20/react-v17.html) as a front-end library.
- [Webpack 5](https://webpack.js.org/) as a bundler.
- [TypeScript](https://www.typescriptlang.org/) for type checking.
- [React Router v6](https://v5.reactrouter.com/web/guides/quick-start) for application routing.
- [i18next](https://www.i18next.com/) for localzation.
- [eslint](https://eslint.org/) for lint code.
- [prettier](https://prettier.io/) for format code.
- [husky](https://typicode.github.io/husky/#/) for run any script before commit.
- [commitlint](https://commitlint.js.org/#/) for conventional commit messages.

## Commit Rules

We are use commitlint for lint our commit messages and it has several rules for commits. <br />

**Commit types**

-   `chore`: a commit of the type chore includes the most important commits.
-   `docs`: a commit of the type docs includes the update of documentation.
-   `feat`: a commit of the type feat introduces a new feature to the codebase.
-   `fix`: a commit of the type fix patches a bug in your codebase.
-   `style`: a commit of the type style includes a css styling commit.
-   `refactor`: a commit of the type refactor includes a code refactoring to the codebase.
-   `revert`: a commit of the type revert is used when a developer wants to revert an old commit.
-   `unit`: a commit of the type unit includes a unit testing commit.
-   `test`: a commit for a testing the app work at difference environments
-   `wip`: work in process

**Examples**

```
    git commit -m "feat(readme): generate a readme file"
    git commit -m "fix(header): show current banner"
    git commit -m "chore(release): new release is ready"
```
