import { $authHost, $host } from "./index";

//создание типа
export const createType = async (type) => {
  //только ($authHost) авторизованный пользватель "admin"
  const { data } = await $authHost.post("api/type", type);
  return data;
};

//получение типа
export const fetchTypes = async () => {
  const { data } = await $host.get("api/type");
  return data;
};

//создание бренда
export const createBrand = async (brand) => {
  const { data } = await $authHost.post("api/brand", brand);
  return data;
};

//создание бренда
export const fetchBrands = async () => {
  const { data } = await $host.get("api/brand");
  return data;
};

//создание девайса
export const createDevice = async (device) => {
  const { data } = await $authHost.post("api/device", device);
  return data;
};

//создание девайсов
export const fetchDevices = async (typeId, brandId, page, limit = 5) => {
  const { data } = await $host.get("api/device", {
    params: {
      typeId,
      brandId,
      page,
      limit,
    },
  });
  return data;
};

//создание девайса
export const fetchOneDevice = async (id) => {
  const { data } = await $host.get("api/device/" + id);
  return data;
};
