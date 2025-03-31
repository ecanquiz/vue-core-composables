type Composables = Record<string, () => Promise<unknown>>;

const composables: Composables = import.meta.glob('@/composables/*.ts', {
  eager: false,
  import: 'default'
})

export default Object.fromEntries(
  Object.entries(composables).map(([path, composable]) => {
    const composableName = path.split('/').pop()?.replace('.ts', '');
    return [composableName, composable];
  })
);

/*https://cucoders.dev/publicaciones/carlosjorger/como-crear-una-librer-a-para-vue3/*/