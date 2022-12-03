import useAdminService from "context/apis/useAdminService";
import useUI from "context/hooks/useUI";
import usePaginatedQuery from "../usePaginatedQuery";

export const GetCouponOrders = async ({ pageIndex, pageSize, couponId }) => {
  console.log(2, couponId);
  const api = useAdminService();
  const { data } = await api.get("/orders", {
    params: { pageIndex, pageSize, couponId },
  });
  return data;
};

export const KEY = "COUPON_ORDERS";
const useGetCouponOrders = ({ couponId }) => {
  const { toast } = useUI();

  return usePaginatedQuery(
    [KEY, couponId],
    () => GetCouponOrders({ couponId }),
    {},
    {
      onError: ({ response }) => {
        toast("Could not get orders", response.data?.message, "error");
      },
    }
  );
};

export default useGetCouponOrders;
