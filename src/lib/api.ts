export const getAllProjectsData = async()=>{
    const res = await fetch('https://jsonplaceholder.typicode.com/posts', {
        cache: "no-store"
    })
    const projects = await res.json()
    return projects
}
