package com.estoquiz.controle_estoque.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.estoquiz.controle_estoque.model.Produto;
import com.estoquiz.controle_estoque.repository.ProdutoRepository;

import java.util.List;
import java.util.Optional;

@Service
public class ProdutoService {

    @Autowired
    private ProdutoRepository produtoRepository;

    public List<Produto> listarTodos() {
        return produtoRepository.findAll();
    }

    public Optional<Produto> buscarPorId(Long id) {
        return produtoRepository.findById(id);
    }

    public Produto salvar(Produto produto) {
        return produtoRepository.save(produto);
    }

    public void deletar(Long id) {
        produtoRepository.deleteById(id);
    }

    public Optional<Produto> atualizarPreco(Long id, double novoPreco) {
        if (novoPreco < 9.90) {
            // Lançar uma exceção ou retornar um Optional vazio, dependendo da sua preferência
            throw new IllegalArgumentException("O preço mínimo para atualização é R$ 9,90.");
        }
        return produtoRepository.findById(id).map(produto -> {
            produto.setPreco(novoPreco);
            return produtoRepository.save(produto);
        });
    }

    public Optional<Produto> atualizarQuantidade(Long id, int novaQuantidade) {
        return produtoRepository.findById(id).map(produto -> {
            produto.setQuantidade(novaQuantidade);
            return produtoRepository.save(produto);
        });
    }
}