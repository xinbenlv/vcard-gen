import vcard from 'vcard-generator';
 
// https://www.npmjs.com/package/vcard-generator
const vcardContent = vcard.generate({
  name: {
    familyName: 'Zhou',
    givenName: 'Zainan',
    middleName: 'Victor'
  },
  nicknames: [{
    text: 'Victor',
  }],
  works: [{
    organization: 'D3Serve Labs Inc.',
    title: 'CEO'
  }],
  emails: [{
    type: 'work',
    text: 'zzn@d3serve.xyz',
  }, {
    type: 'home',
    text: 'zzn@zzn.im',
  }],
  phones: [{
    type: 'mobile',
    text: '+1(443)326-6291',
  }],
  addresses: [{
    type: 'work',
    locality: 'Palo Alto',
    region: 'CA',
    code: '94303',
    country: 'USA',
  }],
  socialProfiles: [{
    type: 'linkedin',
    uri: 'https://www.linkedin.com/in/zainanzhou/',
  }, {
    type: 'twitter',
    uri: 'https://twitter.com/ZainanZhou',
  }],

  photos: [{
    encoding: 'b',
    type: 'JPEG',
    dataUri: '/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAMCAgMCAgMDAwMEAwMEBQgFBQQEBQoHBwYIDAoMDAsKCwsNDhIQDQ4RDgsLEBYQERMUFRUVDA8XGBYUGBIUFRT/2wBDAQMEBAUEBQkFBQkUDQsNFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBT/wAARCAAgACADASIAAhEBAxEB/8QAGQABAAMBAQAAAAAAAAAAAAAACAMGBwUJ/8QAKBAAAQMDAwQCAwEBAAAAAAAAAQIDBAUGEQAHIRITMUEIIgkUUWFi/8QAFwEAAwEAAAAAAAAAAAAAAAAAAwUGBP/EAB8RAAIDAAICAwAAAAAAAAAAAAECAAMEBSEREjFx0f/aAAwDAQACEQMRAD8AVnyz3/e2Ds6DJp8NuZV6pIVHi9/ltrpTlS1D3jIAGff+aHFs2xvp8mhUrwi3pIpXbkJZDInOw2QQMntttnACcjn3n+6UXzg2qmbjizm4shMYQ3JLxW42VpKulIQCB45IBPoEnHGRNZNqv21tczRLelx6VWG4gC31oK0KeI+yjggnB4znwNA2anV/VTNfG4FsrDuOj+yi/G66t5LD3Gg2DuIh26KZUm3nYtZVIDzkXtjKupw4KkHI+quRkFJ8jS5VHQvPGCdYPtw5VTu3bkMXVCuCHHpUhqokdtUgy8EqyB9kg4GAcEBJzknSGEUH0Rpth0PZQGb5iLk8yUaSqdDqVffyzpdyWDMk0yoyKXVqWlcqNIjkZI6SlxtQIIKVIJ4/oSfWifQt/wCk2TNfoF6KkUmSySluWWStt1HpQIz61z96fyKy6tcsaHaFKLdpsrUicJeESKk2cggHntJIPAOSTjOPGp6/ufshuzan7MyvQKXObbyEVLMeUyrHgpwQr+fUkHU9uqcsGA8ym424V1lPb68zWfjlFpN67lVW8KFUZ1YpEaB+m3NnRlo63VK5CXVAd3ACs44T1Y8nSYSwT615BW78sb+21vNabIuCQzakdSUNUuYgOw5HTnqV2lco6/8AkpPg5zpf7K/kcoV21KFR75owtuZKdSyipwne5CBOAC4FnqaGfeVAe8ad5UNVIAEn9pN97WNP/9k=',
  }],
});
console.log(vcardContent);