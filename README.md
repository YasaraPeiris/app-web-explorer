# app-web-skeleton
VueJS skeleton app for bootstrapping Pryv.io web applications.

_Prerequisites:_ 
- Node v12+
- Yarn v1+

## How to?

| Task                            | Command                         |
| ------------------------------- | ------------------------------- |
| Install dependencies            | `yarn install`                  |
| Setup dev environment           | `yarn setup`                    |
| Create distribution             | `yarn build`                    |
| Publish distribution            | `yarn upload ${COMMIT_MESSAGE}` |
| Clear distribution              | `yarn clear`                    |
| Run the app locally in dev mode | `yarn start`                    |
| Run tests                       | `yarn test`                     |
| Run eslint                      | `yarn lint`                     |

### Publish to github pages

If it is the first time you publish app-web-auth3, be sure to run `yarn setup` once.

Create a distribution with your changes by running `yarn build`.

Then, publish your changes by running `yarn upload ${COMMIT_MESSAGE}`

If you encounter conflicts while publishing, run `yarn clear` to reset the `dist/` folder,
then build and publish again.

## Configuration

The app can be configured by editing the configuration file `/src/config.js` (e.g. _appId, pryvServiceInfoUrl_).

Some of the configuration parameters will be retrieved from the [service information](http://api.pryv.com/reference/#service-info), using the pryvServiceInfoUrl provided as query parameter or the default one specified in the configuration file.

TODO: also demonstrate the use of [pryvApiEndpoint](http://api.pryv.com/guides/app-guidelines/#auto-configuration).

## License

[Revised BSD license](https://github.com/pryv/documents/blob/master/license-bsd-revised.md)
