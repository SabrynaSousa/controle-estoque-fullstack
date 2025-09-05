package com.estoquiz.controle_estoque.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.estoquiz.controle_estoque.model.Produto;
import com.estoquiz.controle_estoque.service.ProdutoService;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/produtos")
@CrossOrigin(origins = "http://localhost:3000")
public class ProdutoController {

    @Autowired
    private ProdutoService produtoService;

    @GetMapping
    public List<Produto> listar() {
        return produtoService.listarTodos();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Produto> buscarPorId(@PathVariable Long id) {
        Optional<Produto> produto = produtoService.buscarPorId(id);
        return produto.map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @PostMapping
    public Produto criar(@RequestBody Produto produto) {
        return produtoService.salvar(produto);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deletar(@PathVariable Long id) {
        if (produtoService.buscarPorId(id).isPresent()) {
            produtoService.deletar(id);
            return ResponseEntity.ok().build();
        }
        return ResponseEntity.notFound().build();
    }

    @PutMapping("/{id}/preco")
    public ResponseEntity<Produto> atualizarPreco(@PathVariable Long id, @RequestParam double preco) {
        try {
            Optional<Produto> produtoAtualizado = produtoService.atualizarPreco(id, preco);
            return produtoAtualizado.map(ResponseEntity::ok)
                    .orElse(ResponseEntity.notFound().build());
        } catch (IllegalArgumentException e) {
            return ResponseEntity.badRequest().build();
        }
    }

    @PutMapping("/{id}/quantidade")
    public ResponseEntity<Produto> atualizarQuantidade(@PathVariable Long id, @RequestParam int quantidade) {
        Optional<Produto> produtoAtualizado = produtoService.atualizarQuantidade(id, quantidade);
        return produtoAtualizado.map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }
}