export const headerLinks = [
  {
    label: 'Início',
    route: '/',
  },
  {
    label: 'Criar evento',
    route: '/events/create',
  },
  {
    label: 'Meu Perfil',
    route: '/profile',
  },
]

export const eventDefaultValues = {
  title: '',
  description: '',
  location: '',
  imageUrl: '',
  startDateTime: new Date(),
  endDateTime: new Date(),
  categoryId: '',
  price: '',
  isFree: false,
  url: '',
}
