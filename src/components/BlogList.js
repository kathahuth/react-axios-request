import Blog from "./Blog";


function BlogList ({blogEntries, onDeleteEntry}) {

    return <ul>
        {blogEntries.map(entry => <li key={entry.id}>
                    <Blog             type={entry.body}
                                      rating={entry.name}
                                      onDelete={()=>{
                                          onDeleteEntry(entry.id)
                                      }}
                    />
        </li>)}
    </ul>
}

export default BlogList;