# vue-download-manager-home

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

### router-view + keep-alive
```
<router-view class="middle_content" v-slot="{ Component, route }">
    <keep-alive>
          <component
            :is="Component"
            :key="route.path"
          />
    </keep-alive>
</router-view>
```
