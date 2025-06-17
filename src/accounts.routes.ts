import { Router, Request, Response } from "express";
import { accounts } from "../accounts";

const accountRoutes = Router();

// Inline controller: Get all cakes
accountRoutes.get("/accounts", (req: Request, res: Response): void => {
  res.status(200).json(accounts);
});
accountRoutes.post("/accounts", (req: Request, res: Response): void => {
  const newAccount = {
    id: Date.now(),
    username: req.body,
    funds: 0,
  };
  accounts.push(newAccount);
  res.status(201).json(accounts);
});
accountRoutes.put(
  "/accounts/:accountId",
  (req: Request, res: Response): void => {
    const { accountId } = req.params;
    const index = accounts.findIndex((acc) => acc.id === Number(accountId));
    if (index >= 0) {
      const updatedAccount = {
        id: accounts[index].id,
        username: req.body,
        funds: accounts[index].funds,
      };
      accounts[index] = updatedAccount;
      res.status(200).json(updatedAccount);
    } else {
      res.status(404).send("Account not found");
    }
  }
);
accountRoutes.delete(
  "/accounts/:accountId",
  (req: Request, res: Response): void => {
    const { accountId } = req.params;
    const index = accounts.findIndex((acc) => acc.id === Number(accountId));
    if (index >= 0) {
      accounts.splice(index, 1);
      res.status(204).send();
    } else {
      res.status(404).send("Account not found");
    }
  }
);

export default accountRoutes;
