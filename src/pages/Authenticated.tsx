import { AuthenticatedTemplate } from "../templates/AuthenticatedTemplate/AuthenticatedTemplate";
import { Typography } from "../components/Typography/Typhography";
import { createProduct, getProducts } from "../data/products";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { ButtonTeste } from "../components";


export function Authenticated() {

  const queryClient = useQueryClient();

const { data: products } = useQuery({
  queryKey: ['products'],
  queryFn: getProducts,
});

const { mutateAsync: createProductFn } = useMutation({
  mutationFn: createProduct,
  onSuccess(data, variables, context) {
    const cached = queryClient.getQueryData(['products']);

    queryClient.setQueryData(['products'], data => 
    {
      return [...data, {
        id: data.length + 1,
         name: 'Product 1',
         price: 100 
      }]
    }
    );
  },
});

async function handleCreateProduct() {
try {
  await createProductFn({ name: 'Product 1', price: 100 });
  alert('Product created');
} catch (error) {
  console.error(error);
  alert('Error creating product');
}
}

  return (
    <AuthenticatedTemplate>
      <Typography className="text-center text-xl text-neutral-600">
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {products?.map((product : any) => (
              <tr key={product.id}>
                <td>{product.id}</td>
                <td>{product.name}</td>
                <td>{product.price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <ButtonTeste
          type="primary"
          style="filled"
          state="enabled"
          onClick={() => {
            handleCreateProduct();
          }}
        >
          Create Product
        </ButtonTeste>
      </Typography>
    </AuthenticatedTemplate>
  );
}

export default Authenticated;


