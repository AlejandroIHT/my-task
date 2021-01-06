class Http {
  static instance = new Http();

  get = async (url) => {
    try {
      const req = await fetch(url);
      const json = await req.json();
      
      return json;
    } catch (error) {
      console.log('Http get method error', error);
      throw Error(error);
    }
  };

  put = async (url, body) => {
    try {
      const req = await fetch(url, {
        method: 'PUT',
        body,
      });
      const json = await req.json();

      return json;
    } catch (error) {
      console.log('http get method put error', error);
      throw Error(error);
    }
  };
}

export default Http;