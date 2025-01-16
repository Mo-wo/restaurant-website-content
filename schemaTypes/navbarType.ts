import { defineField, defineType } from "sanity";

export const navBarType = defineType({
    name: 'component',
    title: 'Navbar',
    type: 'document',
    fields: [
        defineField({
            name: 'logo',
            type: 'image',
        }),
        defineField({
            name: 'navlinks',
            type: 'array',
            of: [{type: 'string'}]
        }),
        defineField({
            name: 'call_to_action',
            type: 'string',
        })
    ]
})