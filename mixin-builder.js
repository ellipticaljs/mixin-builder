let Mixin = (superclass) => new MixinBuilder(superclass);
class MixinBuilder {
  constructor(superclass) {
    this.superclass = superclass || class {};
  }

  with(...mixins) {
    return mixins.reduce((c, m) => {
      if(typeof m !== 'function'){
        return c;
      }
      return m(c);
    }, this.superclass);
  }
}
