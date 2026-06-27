class Controller {
  constructor(service) {
    this.service = service;
  }

  async getAll(req, res) {
    try {
      const listaDeRegistros = await this.service.getAllRegisters();
      return res.status(200).json(listaDeRegistros);
    } catch (error) {
      return res.status(500).json({ message: 'Erro ao buscar registros' });
    }
  }
}


module.exports = Controller;