  //import {defineField, defineType} from 'sanity'

export default {
  name: 'comment',
  title: 'Comment',
  type: 'document',
  fields: [
    {
      name: 'comment',
      title: 'Comment',
      type: 'string',
    },
    // defineField({
    //   name: 'slug',
    //   title: 'Slug',
    //   type: 'slug',
    //   options: {
    //     source: 'name',
    //     maxLength: 96,
    //   },
    // }),
    {
      name: 'username',
      title: 'Username',
      type: 'string',
      // options: {
      //   hotspot: true,
      // },
    },
    {
      name: 'profileImg',
      title: 'Profile Image',
      type: 'string',
    },
    {
     name: 'tweet',
     title: 'Tweet',
     description: 'Reference the Tweet the comment is associated to:',
     type: 'reference',
     to: {
       type: 'tweet',
     }  
    }
  ],
}
//     {
//       name: 'bio',
//       title: 'Bio',
//       type: 'array',
//       of: [
//         {
//           title: 'Block',
//           type: 'block',
//           styles: [{title: 'Normal', value: 'normal'}],
//           lists: [],
//         },
//       ],
//     }),
//   ],
//   preview: {
//     select: {
//       title: 'name',
//       media: 'image',
//     },
//   },
// })
