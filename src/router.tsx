import {createBrowserRouter} from 'react-router-dom';
import Layout from './layout/Layout.tsx';
import Products, { loader as productsLoader, action as updateAvailabilityAction } from "./views/Products.tsx";
import NewProduct,{action as newProductAction} from './views/NewProduct.tsx';
import EditPoduct, {loader as editProductLoader, action as editProductAction } from './views/EditPoduct.tsx';
import { action as deleteProductAction } from './components/ProductDetails.tsx';

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Products />,
        loader: productsLoader,
        action: updateAvailabilityAction,
        hydrateFallbackElement: <p>Cargando...</p>,
      },
      {
        path: "productos/nuevo",
        element: <NewProduct />,
        action: newProductAction,
      },
      {
        path: "productos/:id/editar", //ROA Patter - Resource_oriented design
        element: <EditPoduct />,
        loader: editProductLoader,
        action: editProductAction,
      },
      {
        path: "productos/:id/eliminar", //ROA Patter - Resource_oriented design
        action: deleteProductAction,
      },
    ],
  },
]);