import { Request, Response } from "express";
import Account from "../models/Accounts";

export const getAllAccounts = async (req: Request, res: Response) => {
  try {
    console.error("getAllAccounts start:");
    const accounts = await Account.find().select("-createdAt -updatedAt");
    res.status(200).json(accounts);
  } catch (error) {
    console.error("getAllAccounts failed:", error);
    res.status(500).json({
      message: error instanceof Error ? error.message : "Unknown error",
    });
  }
};

export const createAccount = async (req: Request, res: Response) => {
  try {
    const newAccount = await Account.create(req.body);
    res.status(201).json(newAccount);
  } catch (error) {
    res.status(500).json({
      message: error instanceof Error ? error.message : "Unknown error",
    });
  }
};

export const updateAccount = async (req: Request, res: Response) => {
  const { AccountId } = req.params;
  try {
    const foundAccount = await Account.findById(AccountId);
    if (foundAccount) {
      await foundAccount.updateOne(req.body);
      res.status(204).end();
    } else {
      res.status(404).json({ message: "Account not found" });
    }
  } catch (error) {
    res.status(500).json({
      message: error instanceof Error ? error.message : "Unknown error",
    });
  }
};

export const deleteAccount = async (req: Request, res: Response) => {
  const { AccountId } = req.params;
  try {
    const foundAccount = await Account.findById(AccountId);
    if (foundAccount) {
      await foundAccount.deleteOne();
      res.status(204).end();
    } else {
      res.status(404).json({ message: "Account not found" });
    }
  } catch (error) {
    res.status(500).json({
      message: error instanceof Error ? error.message : "Unknown error",
    });
  }
};
