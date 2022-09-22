# RDCH-Product-Card

Este es un paquete para pruebas en NPM.org

### Instalación



### Ejemplo:

```javascript
import { ProductCard, ProductImage, ProductTitle, ProductButtons } from 'rdch-product-card'
```

```jsx
<ProductCard
    product={ product }
    initialValues={{
        count: 4,
        // maxCount: 10
    }}
>
    {
        ({count, reset, isMaxCountReached, maxCount, increaseBy}) => (
            <>
                <ProductImage />
                <ProductTitle />
                <ProductButtons />
           </>
        )
    }
</ProductCard>
```


