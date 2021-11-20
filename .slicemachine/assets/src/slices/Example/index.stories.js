import MyComponent from '../../../../../src/slices/Example';

export default {
  title: 'src/slices/Example'
}


export const _DefaultSlice = () => <MyComponent slice={{"variation":"default-slice","name":"Default slice","slice_type":"example","items":[],"primary":{"title":[{"type":"heading1","text":"Incubate collaborative systems","spans":[]}],"description":[{"type":"paragraph","text":"Reprehenderit deserunt voluptate adipisicing consequat tempor occaecat laborum et reprehenderit aute qui mollit consectetur irure duis. Aliqua magna cupidatat qui deserunt excepteur deserunt voluptate adipisicing aute duis mollit exercitation fugiat consequat. Officia consectetur esse cupidatat ullamco quis tempor nostrud nostrud minim laborum pariatur cillum consectetur.","spans":[]}]},"id":"_DefaultSlice"}} />
_DefaultSlice.storyName = 'Default slice'

export const _WithBackgroundImage = () => <MyComponent slice={{"variation":"withBackgroundImage","name":"With Background Image","slice_type":"example","items":[],"primary":{"title":[{"type":"heading1","text":"Harness holistic methodologies","spans":[]}],"description":[{"type":"paragraph","text":"Occaecat cupidatat Lorem occaecat sit nostrud labore eu enim sunt esse.","spans":[]}],"backgroundImage":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1547082299-de196ea013d6?w=900&h=500&fit=crop"}},"id":"_WithBackgroundImage"}} />
_WithBackgroundImage.storyName = 'With Background Image'