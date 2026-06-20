<?php

header('Content-Type: application/json; charset=utf-8');
header('Access-Control-Allow-Origin: *');

require __DIR__ . '/../conexao.php';

try {

    $sql = "SELECT id, nome, descricao, tecnologias, link_github, ano
            FROM projetos
            WHERE status = 'publicado'
            ORDER BY ano DESC, id";

    $projetos = $pdo->query($sql)->fetchAll(PDO::FETCH_ASSOC);

    echo json_encode($projetos);

} catch (PDOException $e) {

    http_response_code(500);

    echo json_encode([
        'erro' => 'Falha ao acessar o banco de dados'
    ]);
}