"use server";

interface Cargo {
    id: number;
    tujuan: string;
    tarif: string;
    estimasi: string;
  }

export const get = async (): Promise<Cargo[]> =>{
    const data = await fetch(`${process.env.APP_URL}/getcargo`);
    const json = await data.json();
    return json.data;
};