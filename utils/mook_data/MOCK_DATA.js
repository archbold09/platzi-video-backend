const moviesMock = [
  {
    id: 'dbb16088-aa10-45c2-812c-4629381655af',
    title: 'Lumberjacking (Nuoruuteni savotat)',
    year: 2011,
    cover: 'http://dummyimage.com/233x235.bmp/ff4444/ffffff',
    description:
      'Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.\n\nCras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.',
    duration: 21,
    contentRating: null,
    source:
      'https://answers.com/vivamus/vel.html?nulla=penatibus&dapibus=et&dolor=magnis&vel=dis&est=parturient&donec=montes&odio=nascetur&justo=ridiculus&sollicitudin=mus&ut=vivamus&suscipit=vestibulum&a=sagittis&feugiat=sapien&et=cum&eros=sociis&vestibulum=natoque&ac=penatibus&est=et&lacinia=magnis&nisi=dis&venenatis=parturient&tristique=montes&fusce=nascetur&congue=ridiculus&diam=mus&id=etiam&ornare=vel&imperdiet=augue&sapien=vestibulum&urna=rutrum&pretium=rutrum&nisl=neque&ut=aenean&volutpat=auctor&sapien=gravida&arcu=sem&sed=praesent',
    tags: ['Drama', 'Comedy|Drama|Romance'],
  },
  {
    id: '0d15242c-e20f-486d-962d-d00df78f565a',
    title: 'Mallrats',
    year: 2000,
    cover: 'http://dummyimage.com/198x125.png/dddddd/000000',
    description:
      'Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.\n\nSed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.\n\nPellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.',
    duration: 12,
    contentRating: null,
    source:
      'http://newsvine.com/sit/amet/nulla/quisque/arcu/libero.aspx?quam=orci&nec=nullam&dui=molestie&luctus=nibh&rutrum=in&nulla=lectus&tellus=pellentesque&in=at&sagittis=nulla&dui=suspendisse&vel=potenti&nisl=cras&duis=in&ac=purus&nibh=eu&fusce=magna&lacus=vulputate&purus=luctus&aliquet=cum&at=sociis&feugiat=natoque&non=penatibus&pretium=et&quis=magnis&lectus=dis&suspendisse=parturient&potenti=montes&in=nascetur&eleifend=ridiculus&quam=mus&a=vivamus&odio=vestibulum&in=sagittis&hac=sapien&habitasse=cum&platea=sociis&dictumst=natoque&maecenas=penatibus&ut=et&massa=magnis&quis=dis&augue=parturient&luctus=montes&tincidunt=nascetur&nulla=ridiculus&mollis=mus&molestie=etiam&lorem=vel&quisque=augue&ut=vestibulum&erat=rutrum&curabitur=rutrum&gravida=neque&nisi=aenean&at=auctor&nibh=gravida&in=sem&hac=praesent&habitasse=id&platea=massa&dictumst=id&aliquam=nisl&augue=venenatis&quam=lacinia&sollicitudin=aenean&vitae=sit&consectetuer=amet&eget=justo&rutrum=morbi&at=ut&lorem=odio&integer=cras&tincidunt=mi&ante=pede&vel=malesuada&ipsum=in&praesent=imperdiet&blandit=et&lacinia=commodo&erat=vulputate&vestibulum=justo&sed=in&magna=blandit&at=ultrices&nunc=enim&commodo=lorem&placerat=ipsum&praesent=dolor&blandit=sit&nam=amet&nulla=consectetuer&integer=adipiscing&pede=elit&justo=proin&lacinia=interdum&eget=mauris&tincidunt=non&eget=ligula&tempus=pellentesque',
    tags: ['Comedy|Drama', 'Comedy|Drama|Romance', 'Drama', 'Drama', 'Comedy'],
  },
  {
    id: 'e7bc619f-6c27-41bd-8f59-6b5d2fb67315',
    title: 'Withnail & I',
    year: 2009,
    cover: 'http://dummyimage.com/192x210.bmp/dddddd/000000',
    description:
      'Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.\n\nQuisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.\n\nVestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.',
    duration: 6,
    contentRating: null,
    source:
      'http://abc.net.au/dui.jsp?nibh=augue&in=vel&hac=accumsan&habitasse=tellus&platea=nisi&dictumst=eu&aliquam=orci&augue=mauris&quam=lacinia&sollicitudin=sapien&vitae=quis&consectetuer=libero&eget=nullam&rutrum=sit&at=amet&lorem=turpis&integer=elementum&tincidunt=ligula&ante=vehicula&vel=consequat&ipsum=morbi&praesent=a&blandit=ipsum&lacinia=integer&erat=a&vestibulum=nibh&sed=in&magna=quis&at=justo&nunc=maecenas&commodo=rhoncus&placerat=aliquam&praesent=lacus&blandit=morbi&nam=quis&nulla=tortor&integer=id&pede=nulla&justo=ultrices&lacinia=aliquet&eget=maecenas&tincidunt=leo&eget=odio&tempus=condimentum&vel=id&pede=luctus&morbi=nec&porttitor=molestie&lorem=sed&id=justo&ligula=pellentesque&suspendisse=viverra&ornare=pede&consequat=ac&lectus=diam&in=cras&est=pellentesque&risus=volutpat&auctor=dui&sed=maecenas&tristique=tristique&in=est&tempus=et&sit=tempus&amet=semper&sem=est&fusce=quam&consequat=pharetra&nulla=magna&nisl=ac&nunc=consequat&nisl=metus&duis=sapien&bibendum=ut&felis=nunc&sed=vestibulum&interdum=ante&venenatis=ipsum&turpis=primis&enim=in&blandit=faucibus&mi=orci&in=luctus&porttitor=et&pede=ultrices&justo=posuere&eu=cubilia&massa=curae&donec=mauris&dapibus=viverra&duis=diam&at=vitae',
    tags: ['War'],
  },
  {
    id: 'aaca6f9c-9f1b-46d1-9b8b-d2aab911aa46',
    title: 'Backyard, The',
    year: 2003,
    cover: 'http://dummyimage.com/141x181.bmp/dddddd/000000',
    description:
      'Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.\n\nDuis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.',
    duration: 13,
    contentRating: null,
    source:
      'https://squarespace.com/enim/lorem/ipsum/dolor.jsp?pretium=dictumst&iaculis=etiam&diam=faucibus&erat=cursus&fermentum=urna&justo=ut&nec=tellus&condimentum=nulla&neque=ut&sapien=erat&placerat=id&ante=mauris&nulla=vulputate&justo=elementum&aliquam=nullam&quis=varius&turpis=nulla&eget=facilisi&elit=cras&sodales=non&scelerisque=velit&mauris=nec&sit=nisi&amet=vulputate&eros=nonummy&suspendisse=maecenas&accumsan=tincidunt&tortor=lacus&quis=at&turpis=velit&sed=vivamus&ante=vel&vivamus=nulla&tortor=eget&duis=eros&mattis=elementum&egestas=pellentesque&metus=quisque&aenean=porta&fermentum=volutpat&donec=erat&ut=quisque&mauris=erat&eget=eros&massa=viverra&tempor=eget&convallis=congue&nulla=eget&neque=semper&libero=rutrum&convallis=nulla&eget=nunc&eleifend=purus&luctus=phasellus&ultricies=in&eu=felis&nibh=donec&quisque=semper&id=sapien&justo=a&sit=libero&amet=nam&sapien=dui&dignissim=proin&vestibulum=leo&vestibulum=odio&ante=porttitor&ipsum=id&primis=consequat&in=in&faucibus=consequat&orci=ut&luctus=nulla&et=sed&ultrices=accumsan&posuere=felis&cubilia=ut&curae=at&nulla=dolor&dapibus=quis&dolor=odio&vel=consequat&est=varius&donec=integer&odio=ac&justo=leo&sollicitudin=pellentesque&ut=ultrices&suscipit=mattis',
    tags: [
      'Comedy|Crime|Drama|Romance',
      'Drama',
      'Adventure|Animation|Comedy|Fantasy|Musical',
    ],
  },
  {
    id: 'c9f66d62-e6e6-435e-b4d8-4d0b2290cfca',
    title: 'Artist and the Model, The (El artista y la modelo)',
    year: 2009,
    cover: 'http://dummyimage.com/118x239.bmp/dddddd/000000',
    description:
      'Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.\n\nQuisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.\n\nVestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.',
    duration: 87,
    contentRating: null,
    source:
      'https://dedecms.com/tincidunt.json?vestibulum=phasellus&aliquet=sit&ultrices=amet&erat=erat&tortor=nulla&sollicitudin=tempus&mi=vivamus&sit=in&amet=felis&lobortis=eu&sapien=sapien&sapien=cursus&non=vestibulum&mi=proin&integer=eu&ac=mi&neque=nulla&duis=ac&bibendum=enim&morbi=in&non=tempor&quam=turpis&nec=nec&dui=euismod&luctus=scelerisque&rutrum=quam&nulla=turpis&tellus=adipiscing&in=lorem&sagittis=vitae&dui=mattis&vel=nibh&nisl=ligula&duis=nec&ac=sem&nibh=duis&fusce=aliquam&lacus=convallis&purus=nunc',
    tags: ['Horror', 'Drama', 'Adventure|Sci-Fi', 'Comedy|Fantasy'],
  },
  {
    id: 'f3b8c41b-2a69-421c-ba81-dfaee81e243e',
    title: 'Wisdom',
    year: 2004,
    cover: 'http://dummyimage.com/102x226.jpg/dddddd/000000',
    description:
      'Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.\n\nCras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.\n\nQuisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.',
    duration: 27,
    contentRating: null,
    source:
      'https://sfgate.com/eros.xml?ipsum=bibendum&dolor=felis&sit=sed&amet=interdum&consectetuer=venenatis&adipiscing=turpis&elit=enim&proin=blandit&risus=mi&praesent=in&lectus=porttitor&vestibulum=pede&quam=justo&sapien=eu&varius=massa&ut=donec&blandit=dapibus&non=duis&interdum=at&in=velit&ante=eu&vestibulum=est&ante=congue&ipsum=elementum&primis=in&in=hac&faucibus=habitasse&orci=platea&luctus=dictumst&et=morbi&ultrices=vestibulum&posuere=velit&cubilia=id&curae=pretium&duis=iaculis&faucibus=diam&accumsan=erat&odio=fermentum&curabitur=justo&convallis=nec&duis=condimentum&consequat=neque&dui=sapien&nec=placerat&nisi=ante&volutpat=nulla&eleifend=justo&donec=aliquam',
    tags: [
      'Drama',
      'Crime|Drama|Film-Noir',
      'Comedy',
      'Action|Animation|Children|Comedy|Sci-Fi|IMAX',
    ],
  },
  {
    id: '9624728c-f6f8-4300-9b19-513a116b07a4',
    title: 'Hit List, The',
    year: 2010,
    cover: 'http://dummyimage.com/130x169.png/cc0000/ffffff',
    description:
      'Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.',
    duration: 83,
    contentRating: null,
    source:
      'https://baidu.com/curae/nulla/dapibus/dolor.aspx?sit=pulvinar&amet=nulla&consectetuer=pede&adipiscing=ullamcorper&elit=augue&proin=a&interdum=suscipit&mauris=nulla&non=elit&ligula=ac&pellentesque=nulla&ultrices=sed&phasellus=vel&id=enim&sapien=sit&in=amet&sapien=nunc&iaculis=viverra&congue=dapibus&vivamus=nulla&metus=suscipit',
    tags: ['Comedy|Romance'],
  },
  {
    id: '3a8507a0-c2d4-4d5a-b10b-0e9c90c9f4ea',
    title: 'Company: Original Cast Album',
    year: 1998,
    cover: 'http://dummyimage.com/247x224.png/ff4444/ffffff',
    description:
      'Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.\n\nInteger tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.\n\nPraesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.',
    duration: 91,
    contentRating: null,
    source:
      'http://wix.com/dui.aspx?potenti=eget&in=elit&eleifend=sodales&quam=scelerisque&a=mauris&odio=sit&in=amet&hac=eros&habitasse=suspendisse&platea=accumsan&dictumst=tortor&maecenas=quis&ut=turpis&massa=sed&quis=ante&augue=vivamus&luctus=tortor&tincidunt=duis&nulla=mattis&mollis=egestas&molestie=metus&lorem=aenean&quisque=fermentum&ut=donec&erat=ut&curabitur=mauris&gravida=eget&nisi=massa&at=tempor&nibh=convallis&in=nulla&hac=neque&habitasse=libero&platea=convallis&dictumst=eget&aliquam=eleifend&augue=luctus&quam=ultricies&sollicitudin=eu&vitae=nibh&consectetuer=quisque&eget=id&rutrum=justo&at=sit&lorem=amet&integer=sapien&tincidunt=dignissim&ante=vestibulum&vel=vestibulum&ipsum=ante&praesent=ipsum&blandit=primis&lacinia=in&erat=faucibus&vestibulum=orci&sed=luctus&magna=et&at=ultrices&nunc=posuere&commodo=cubilia&placerat=curae&praesent=nulla&blandit=dapibus&nam=dolor&nulla=vel&integer=est',
    tags: ['Comedy|Drama', '(no genres listed)'],
  },
  {
    id: '43adbb4a-6c8b-4e9c-9c98-aa15d03dbd48',
    title: "Whores' Glory",
    year: 2010,
    cover: 'http://dummyimage.com/139x241.jpg/5fa2dd/ffffff',
    description:
      'Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.',
    duration: 24,
    contentRating: null,
    source:
      'http://elegantthemes.com/primis/in/faucibus/orci/luctus/et.xml?primis=maecenas',
    tags: ['Documentary', 'Drama|War'],
  },
  {
    id: 'b18d28ec-51b5-4340-935f-0a14f33efdff',
    title: 'None But the Lonely Heart',
    year: 1984,
    cover: 'http://dummyimage.com/114x144.bmp/5fa2dd/ffffff',
    description:
      'Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.\n\nDuis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.',
    duration: 96,
    contentRating: null,
    source:
      'https://noaa.gov/at.xml?erat=faucibus&vestibulum=orci&sed=luctus&magna=et&at=ultrices&nunc=posuere&commodo=cubilia&placerat=curae&praesent=donec&blandit=pharetra&nam=magna&nulla=vestibulum&integer=aliquet&pede=ultrices&justo=erat&lacinia=tortor&eget=sollicitudin&tincidunt=mi&eget=sit&tempus=amet&vel=lobortis&pede=sapien&morbi=sapien&porttitor=non&lorem=mi&id=integer&ligula=ac&suspendisse=neque&ornare=duis&consequat=bibendum&lectus=morbi&in=non&est=quam&risus=nec&auctor=dui&sed=luctus&tristique=rutrum&in=nulla&tempus=tellus&sit=in&amet=sagittis&sem=dui&fusce=vel&consequat=nisl&nulla=duis&nisl=ac&nunc=nibh&nisl=fusce&duis=lacus&bibendum=purus&felis=aliquet&sed=at&interdum=feugiat&venenatis=non&turpis=pretium&enim=quis&blandit=lectus&mi=suspendisse&in=potenti&porttitor=in&pede=eleifend&justo=quam&eu=a&massa=odio&donec=in&dapibus=hac&duis=habitasse&at=platea&velit=dictumst&eu=maecenas&est=ut&congue=massa&elementum=quis&in=augue&hac=luctus&habitasse=tincidunt&platea=nulla&dictumst=mollis&morbi=molestie&vestibulum=lorem&velit=quisque&id=ut&pretium=erat&iaculis=curabitur&diam=gravida&erat=nisi&fermentum=at&justo=nibh&nec=in&condimentum=hac',
    tags: ['Comedy|Horror|Mystery|Thriller', 'Drama', 'Children'],
  },
]

function filteredMoviesMock(tags) {
  return moviesMock.filter((movie) => movie.tags.includes(tag))
}

class MoviesServiceMock {
  async getMovies() {
    return Promise.resolve(moviesMock)
  }
  async createMovie() {
    return Promise.resolve(moviesMock[0])
  }
}

module.exports = {
  moviesMock,
  filteredMoviesMock,
  MoviesServiceMock,
}
