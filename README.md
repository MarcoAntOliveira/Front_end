# Principios Front-End
Este repositorio é dedicado ao curso de Front-end, porém assunntos avançados e fora da grade do curso

## HTML

### Tags

- Listas e Links
- Formatação de Texto
- Tabelas e Layouts tabelados
- Elementos de Layout
 - Formularios

## CSS

estudo de css [link](https://www.w3schools.com/css/)
 - Cores na web
 - Usabilidade
- Seletores
- Unidades
- Box Model
- Posicionamento de Elementos

- Herança
- Combinadores
- css para tabelas

### Recursos moderrnos css

- scroll-snap-align
sempre alinha os sliddes ao centro configura os slides pai e configura os slides filhos de acordo com a necessidade
```css
.snap-container{
  overflow-x:auto;
  scroll-snap-type: x mandatory;
  }
.snap_item{
   scroll-snap-align: center;
}
```

- scroll-snap-type
sempre alinha os sliddes ao centro configura os slides pai e configura os slides filhos de acordo com a necessidade
```css
.snap-container{
  overflow-x:auto;
  scroll-snap-type: y proximity;
  }
.snap_item{
   scroll-snap-align: center;
}

```

- :focus-within
  tudo onde a propriedade focus within será aplicado na div
```css
.focus-withhin-container{
  overflow-x:auto;
  scroll-snap-type: y proximity;
  }
.focus-withhin-container:focus-within{
   scroll-snap-align: center;
   background: #48798;
}

```
- Background clip
define até a cor de fundo vai
```css
.bg-clip-padding-box{
  background-clip:padding-box;
}
.bg-clip-content-box{

}
```

-has
verifca se o conteudo do formularrio é valido,  se não for o campo se esvazia

```css
.has-form:has(input:invalid){
  background-color:rgba(255, 107, 107, 0.1)

}

```


## JS

### Reactjs

### Typescript
