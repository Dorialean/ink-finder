import { useOrderStore } from 'src/stores/useOrderStore';
import { useHttpClient } from '../useHttpClient';
import { Order } from 'src/models/Order';

const ORDER_API_PATH = '/order';
const orderStore = useOrderStore();

async function getUserOrders(): Array<Order> {
  const orders = await useHttpClient(ORDER_API_PATH).get().json<Order>().data
    .value;
  orderStore.setOrders(orders);
}

function updateOrders(orders: Array<Order>) {
  orderStore.setOrders(orders);
}

export const useOrderService = {
  getUserOrders,
  updateOrders,
};
