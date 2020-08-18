# Manage User Permissions In Nuxt

> User permissions example in Nuxt
>

This plugin path in '~/plugins/managePermissions.js'

for use it  add to nuxt.config.js
```html
plugins: [
    '~/plugins/managePermissions',
  ],
```

> To add permission only use $can('permissionType') in project tags
```html
v-show="$can('permission1')"
v-show="$can('permission1', 'permission2' , ...)"
```

## Build Setup

```bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate
```

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).
