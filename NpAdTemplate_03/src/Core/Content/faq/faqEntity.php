<?php declare(strict_types=1);

namespace NpAdTemplate_03\Core\Content\faq;

use Shopware\Core\Framework\DataAbstractionLayer\Entity;
use Shopware\Core\Framework\DataAbstractionLayer\EntityIdTrait;

class faqEntity extends Entity {
    use EntityIdTrait;
    /**
     * @var int
     */
    protected $id;
    /**
     * @var string
     */
    protected $question;
    /**
     * @var string
     */
    protected $answer;

    /**
     * @return int
     */
    public function getId() {
        return $this->id;
    }

    /**
     * @return string|null
     */
    public function getQuestion() {
        return $this->question;
    }

    /**
     * @param string|null $question
     */
    public function setQuestion(?string $question) {
        $this->question = $question;
    }

    /**
     * @return string|null
     */
    public function getAnswer() {
        return $this->answer;
    }

    /**
     * @param string|null $answer
     */
    public function setAnswer(?string $answer) {
        $this->answer = $answer;
    }
}