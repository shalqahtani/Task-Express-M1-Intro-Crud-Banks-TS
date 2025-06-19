import { Router, Request, Response } from "express";
import { accounts } from "../../accounts";
import {
  createAccount,
  deleteAccount,
  getAllAccounts,
  updateAccount,
} from "./accounts.controller";

const accountRoutes = Router();

// Inline controller: Get all cakes
accountRoutes.get("/accounts", (req: Request, res: Response): void => {
  // alert("getAllAccounts");
  console.error("getAllAccounts ");
  getAllAccounts(req, res);
});
accountRoutes.post("/accounts", (req: Request, res: Response): void => {
  createAccount(req, res);
});
accountRoutes.put(
  "/accounts/:accountId",
  (req: Request, res: Response): void => {
    updateAccount(req, res);
  }
);
accountRoutes.delete(
  "/accounts/:accountId",
  (req: Request, res: Response): void => {
    deleteAccount(req, res);
  }
);

export default accountRoutes;
