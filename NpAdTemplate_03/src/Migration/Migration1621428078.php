<?php declare(strict_types=1);

namespace NpAdTemplate_03\Migration;

use Doctrine\DBAL\Connection;
use Shopware\Core\Framework\Migration\MigrationStep;

class Migration1621428078 extends MigrationStep
{
    public function getCreationTimestamp(): int
    {
        return 1621428078;
    }

    public function update(Connection $connection): void
    {
        $connection->exec("CREATE TABLE IF NOT EXISTS `faq` (
            `id`            BINARY(16) NOT NULL,
            `question`      VARCHAR(255) NOT NULL,
            `answer`        VARCHAR(255) NOT NULL,
            `created_at`    DATETIME(3),
            `updated_at`    DATETIME(3),
            PRIMARY KEY (`id`)
            ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utfmb4_unicode_ci;");
    }

    public function updateDestructive(Connection $connection): void
    {
        // implement update destructive
    }
}
