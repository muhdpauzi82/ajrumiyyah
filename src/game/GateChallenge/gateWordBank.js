import { isimAsas, fiilAsas, hurufAsas } from "../../database";

export const gateWordBank = {
  isim: [...isimAsas, ...fiilAsas, ...hurufAsas],
  fiil: [...isimAsas, ...fiilAsas, ...hurufAsas],
  huruf: [...isimAsas, ...fiilAsas, ...hurufAsas],
};