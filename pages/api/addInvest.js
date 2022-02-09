import { createInvest } from "../../prisma/invest";

export default async function handler(req, res) {
  const { dolars, usdars } = req.body;
  const invest = await createInvest(dolars, usdars);
  return res.json(invest);
}
