//import {defineField, defineType} from 'sanity'

//export default defineType({
  export default {
  name: 'tweet',
  title: 'Tweet',
  type: 'document',
  fields: [
    {
      name: 'text',
      title: 'Text in Tweet',
      type: 'string',
    },
    // defineField({
    //   name: 'slug',
    //   title: 'Slug',
    //   type: 'slug',
    //   options: {
    //     source: 'title',
    //     maxLength: 96,
    //   },
    //}),
    {
      name: "blockTweet",
      title: 'Block tweet',
      discription: 'ADMIN Controls: Toggle if Tweet is deemed inappropriate',
      type: 'boolean',
    },

    {
      name: 'username',
      title: 'Username',
      type: 'string',
      // to: {type: 'author'},
    },
    {
      name: 'profileImg',
      title: 'Profile Image',
      type: 'string',
      // options: {
      //   hotspot: true,
      // },
    },
    {
      name: 'image',
      title: 'Tweet image',
      type: 'string',
      // of: [{type: 'reference', to: {type: 'category'}}],
    },
  ],
}


//     defineField({
//       name: 'publishedAt',
//       title: 'Published at',
//       type: 'datetime',
//     }),
//     defineField({
//       name: 'body',
//       title: 'Body',
//       type: 'blockContent',
//     }),
//   ],

//   preview: {
//     select: {
//       title: 'title',
//       author: 'author.name',
//       media: 'mainImage',
//     },
//     prepare(selection) {
//       const {author} = selection
//       return {...selection, subtitle: author && `by ${author}`}
//     },
//   },
// })
