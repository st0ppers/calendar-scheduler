export const handler = async (resp: any) => {
  const content = await resp.json();
  return resp.ok ? content : Promise.reject(content || resp.statusText);
};
