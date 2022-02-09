// /prisma/Invest.js
import prisma from "./prisma";

// READ
export const getAllInvests = async () => {
  const Invests = await prisma.invest.findMany({});
  return Invests;
};

export const getInvest = async (id) => {
  const Invest = await prisma.invest.findUnique({
    where: { id },
  });
  return Invest;
};

// CREATE
export const createInvest = async (dolars, usdars) => {
  dolars = Number.parseFloat(dolars);
  usdars = Number.parseFloat(usdars);
  const Invest = await prisma.invest.create({
    data: {
      dolars,
      usdars
    },
  });
  return Invest;
};

// UPDATE
export const updateInvest = async (id, updateData) => {
  const Invest = await prisma.invest.update({
    where: {
      id,
    },
    data: {
      ...updateData,
    },
  });
  return Invest;
};

// DELETE
export const deleteInvest = async (id) => {
  const Invest = await prisma.invest.delete({
    where: {
      id,
    },
  });
  return Invest;
};
