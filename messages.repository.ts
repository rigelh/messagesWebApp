import { readFile, writeFile } from "fs/promises";


export class MessagesRepository{

async findAll() {

const contents = await readFile('messages.json', 'utf-8');
const messages = JSON.parse(contents);
return messages;

}

async findOne(id:string) {

const contents = await readFile('messages.json', 'utf-8');
const messages = JSON.parse(contents);
return messages[id];

}

async create(content: string) {
// i merr njeher te gjitha mesazhet
  const contents = await readFile('messages.json', 'utf-8');
const messages = JSON.parse(contents);

// gjenero id dhe brenda var ku ke lexuar file fut id dhe cotent
const id = Math.floor(Math.random() * 999 )
messages[id] = {id, content};

// shkruan ne file storage mesages por ne writeFile() duhet ti kalosh gjithmon si string
await writeFile( 'messages.json', JSON.stringify(messages));


}
}