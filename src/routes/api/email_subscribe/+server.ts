import { addEmailList } from '$lib/server/services/email.service.js';
import { json } from '@sveltejs/kit';

export async function POST({ request }) {

  const {
    email,
    utm_source,
    utm_medium,
    utm_campaign,
  } = await request.json();

  const addEmail = await addEmailList({
    email,
    utm_source,
    utm_medium,
    utm_campaign,
  });

  return json(addEmail);
}