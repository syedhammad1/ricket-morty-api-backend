import { Request, Response } from "express";
import axios from "axios";
export const getLocations = async (req: Request, res: Response) => {
  try {
    const response = await axios.post("https://rickandmortyapi.com/graphql", {
      query: `
      query {
        locations(page:${req.query.pageno}){
          info {
            count
            pages
            next
            prev
          }
          results{
            name
            type
            dimension
            residents{
              id
            }
          }
        }
      }
      `,
    });
    const locations = response.data.data.locations.results;
    for (let i = 0; i < locations.length; i++) {
      const elem = locations[i];
      elem.residents = elem.residents.length;
    }
    const info = response.data.data.locations.info;
    res.json({ data: locations, info });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
