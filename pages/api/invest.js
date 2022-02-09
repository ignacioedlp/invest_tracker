// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import {
  createInvest,
  deleteInvest,
  getInvest,
  getAllInvests,
  updateInvest,
} from "../../prisma/invest";

export default async function handler(req, res) {
  try {
    switch (req.method) {
      case "GET": {
        if (req.query.id) {
          // Get a single user if id is provided is the query
          // api/users?id=1
          const invest = await getInvest(req.query.id);
          return res.status(200).json(invest);
        } else {
          // Otherwise, fetch all users
          const invests = await getAllInvests();
          return res.json(invests);
        }
      }
      case "POST": {
        // Create a new user
        const { dolars, usdars } = req.body;
        const invest = await createInvest(dolars, usdars);
        return res.json(invest);
      }
      case "PUT": {
        // Update an existing user
        const { id, ...updateData } = req.body;
        const invest = await updateInvest(id, updateData);
        return res.json(invest);
      }
      case "DELETE": {
        // Delete an existing user
        const { id } = req.body;
        const invest = await deleteInvest(id);
        return res.json(invest);
      }
      default:
        break;
    }
  } catch (error) {
    return res.status(500).json({ ...error, message: error.message });
  }
}
