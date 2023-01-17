/*
 * boucle sur l'éditeur avec un H2 et un id
 */
{titles.map((titleH2, id)=> (
    <Editor key={titleH2} id={id} title={titleH2} data={"coucou"}/>
  ))}

  /*
   * récupérer la data d'un éditeur à partir de son id
   */

//   {data.filter((data)=> data.id)}
  {data.filter((data)=> (
    Editor.data.id={data}))};