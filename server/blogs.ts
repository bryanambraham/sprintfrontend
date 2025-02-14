"use server";

interface Blog{
    id: number
    title: string
    image: string
    writer: string
    content: string
}

export const get = async (): Promise<Blog[]> =>{
    const data = await fetch(`${process.env.APP_URL}/getblog`);
    const json = await data.json();
    return json.data;
};