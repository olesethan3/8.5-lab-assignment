import { createClient } from 'https://cdn.skypack.dev/@supabase/supabase-js@2.7.1'

const supabaseUrl = 'https://cbjemlnnfxbvvvmlvpzk.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNiamVtbG5uZnhidnZ2bWx2cHprIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTA3NDIzNjUsImV4cCI6MjAyNjMxODM2NX0.uwlONI4ORs64NbcnzLKwO_Nhn0n7-bRidKEz2pNWUrI'
const supabase = createClient(supabaseUrl, supabaseKey)

async function getBooks() {
    let { data: books, error } = await supabase
    .from('books')
    .select('*')

    for (let book of books) {
        let bookList = document.getElementById('books');
        bookList.innerHTML += `<tr><td>${book.title} <td>${book.author} <td> ${book.ISBN}`;
    }
}

getBooks();