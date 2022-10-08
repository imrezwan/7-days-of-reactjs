const comments = [
    { id: 1, comment: "Write a function that creates components"},
    { id: 2, comment: "Note that a HOC doesn’t modify the input component"},
    { id: 3, comment: "Don’t Mutate the Original Component. Use Composition"},
    { id: 4, comment: "Pass Unrelated Props Through to the Wrapped Component"},
    { id: 5, comment: "Convention: Maximizing Composability"},
];

const blogposts = [
    { id: 1, slug: 'blog-1', title: 'Welcome React HOC Practice - 1', desc: 'While the convention for higher-order components is to pass through all props to the wrapped component, this does not work for refs. That’s because ref is not really a prop — like key, it’s handled specially by Reac' },
    { id: 2, slug: 'blog-2', title: 'Welcome React HOC Practice - 2', desc: 'Normally, you shouldn’t need to think about this. But it matters for HOCs because it means you can’t apply a HOC to a component within the render method of a component' },
    { id: 3, slug: 'blog-3', title: 'Welcome React HOC Practice - 3', desc: 'Instead, apply HOCs outside the component definition so that the resulting component is created only once. Then, its identity will be consistent across renders. This is usually what you want, anyway' },
    { id: 4, slug: 'blog-4', title: 'Welcome React HOC Practice - 4', desc: 'Sometimes it’s useful to define a static method on a React component. For example, Relay containers expose a static method getFragment to facilitate the composition of GraphQL fragments' },
]


export default class DataSource {
    static getComments() {
        return comments;
    }

    static getBlogPosts() {
        return blogposts;
    }
}