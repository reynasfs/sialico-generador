exports.handler = async (event) => {
  const { tipo, apiKey } = event.queryStringParameters || {};

  try {
    const url = `https://www.gruposialico.com/_functions/siguienteConsecutivo?tipo=${tipo || 'CS'}&apiKey=${encodeURIComponent(apiKey || '')}`;
    const resp = await fetch(url);
    const data = await resp.json();

    return {
      statusCode: resp.status,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    };
  } catch (err) {
    return {
      statusCode: 500,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ error: err.message })
    };
  }
};
