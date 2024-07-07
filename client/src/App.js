import { useEffect } from "react";
import "./App.css";
import { useQuery, gql, useMutation } from "@apollo/client";

function App() {
  const GET_GAMES = gql`
    query {
      games {
        id
        title
        platform
      }
    }
  `;

  const ADD_GAME = gql`
    mutation ($game: AddGameInput!) {
      addGame(game: $game) {
        id
        title
        platform
      }
    }
  `;

  const { loading, error, data: d1 } = useQuery(GET_GAMES);
  const [addGame, { data: d2 }] = useMutation(ADD_GAME);
  console.log(d1);
  if (d2) console.log(d2.addGame.id);
  useEffect(() => {
    addGame({
      variables: {
        game: {
          title: "RDR2",
          platform: ["PS5", "XBOX 360"],
        },
      },
    });
  }, []);
  return <div className="App"></div>;
}

export default App;
